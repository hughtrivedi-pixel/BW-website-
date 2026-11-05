# Favicon from the Brentwood logo

Goal: a small browser-tab icon that matches your logo (white tree on green).

## Steps
1. Make 2 favicon options from your uploaded logo, keeping your real tree (not redrawn):
   - Option A: the white tree, cropped tight, on your green in a rounded square.
   - Option B: the white tree on a green circle.
   The words are left off because they can't be read at tab size.
2. Show both to you at real tab size so you can pick one.
3. Add the one you pick to the site as the browser-tab icon and phone home-screen icon, replacing the old orange starter icon.
4. Check that it shows in the preview and in the next SiteGround build.

## Technical details
- Crop the tree from the upload, then make 64x64 `public/favicon.png` and a 180x180 `public/apple-touch-icon.png`.
- Update the icon links in `index.html` and delete `public/favicon.ico`.
