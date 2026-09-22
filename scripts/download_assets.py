import os
import re
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

BASE_URL = "https://dsrbuilders.in/"

def extract_assets():
    with open("page.html", "r", encoding="utf-8") as f:
        html = f.read()

    # Images, backgrounds, icons, etc.
    img_srcs = re.findall(r'<img[^>]+(?:src|data-src)=[\"\']([^\"\']+)[\"\']', html, re.IGNORECASE)
    bg_imgs = re.findall(r'url\([\"\']?([^\"\'\)]+)[\"\']?\)', html, re.IGNORECASE)
    video_srcs = re.findall(r'<(?:video|source)[^>]+(?:src|poster)=[\"\']([^\"\']+)[\"\']', html, re.IGNORECASE)
    link_hrefs = re.findall(r'<link[^>]+href=[\"\']([^\"\']+\.(?:png|jpg|jpeg|gif|svg|webp|ico)[^\"\']*)[\"\']', html, re.IGNORECASE)
    a_imgs = re.findall(r'<a[^>]+href=[\"\']([^\"\']+\.(?:png|jpg|jpeg|gif|svg|webp))[\"\']', html, re.IGNORECASE)

    all_assets = set()
    for item in img_srcs + bg_imgs + video_srcs + link_hrefs + a_imgs:
        clean = item.split("?")[0].split("#")[0].strip()
        if clean and not clean.startswith("data:") and not clean.startswith("javascript:"):
            all_assets.add(clean)

    # Also add standard style css & any specific background images
    extra = [
        "assets/css/style.css",
        "assets/dsr-img/body/favicon.png",
        "assets/dsr-img/logo.png",
        "assets/dsr-img/skymarq-img/logo.png",
        "assets/dsr-img/skymarq-img/body/sky-marq-ban-1.jpg",
        "assets/dsr-img/skymarq-img/body/sky-marq-mobile-ban-1.jpg",
        "assets/dsr-img/skymarq-img/body/sky-marq-mobile-ban-2.jpg",
        "assets/dsr-img/skymarq-img/body/buldinf-sky.png",
        "assets/dsr-img/skymarq-img/body/about.jpg",
        "assets/dsr-img/skymarq-img/body/location.gif",
        "assets/dsr-img/bg/footer-bg.png",
        "assets/dsr-img/body/about-pattern.svg",
        "assets/dsr-img/skymarq-img/floor-plan/master-Plan.png"
    ]
    for e in extra:
        all_assets.add(e)

    return sorted(list(all_assets))

def download_one(asset_path):
    if asset_path.startswith("http://") or asset_path.startswith("https://"):
        url = asset_path
        if "img.youtube.com" in url:
            parts = url.split("/")
            video_id = parts[-2]
            filename = f"youtube_{video_id}.jpg"
            dest_path = os.path.join("public", "assets", "youtube", filename)
        else:
            filename = os.path.basename(urllib.parse.urlparse(url).path)
            dest_path = os.path.join("public", "assets", "external", filename)
    else:
        url = urllib.parse.urljoin(BASE_URL, asset_path)
        dest_path = os.path.join("public", asset_path)

    os.makedirs(os.path.dirname(dest_path), exist_ok=True)

    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
        return True, asset_path, "Already exists"

    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(dest_path, "wb") as f:
                f.write(data)
        return True, asset_path, f"Downloaded ({len(data)} bytes)"
    except Exception as e:
        return False, asset_path, str(e)

def main():
    assets = extract_assets()
    print(f"Total assets to download: {len(assets)}")
    with ThreadPoolExecutor(max_workers=10) as pool:
        results = list(pool.map(download_one, assets))

    success = sum(1 for r in results if r[0])
    failed = [r for r in results if not r[0]]
    print(f"Completed: {success}/{len(assets)} succeeded.")
    if failed:
        print(f"Failed ({len(failed)}):")
        for f in failed:
            print("  ", f[1], ":", f[2])

if __name__ == "__main__":
    main()
