# Earl untuk VS Code
Penyorotan sintaksis dan perkakas untuk bahasa Earl
> Beberapa pengembangan proyek ini juga hasil dari geneative AI

# Instalasi
## Penggunaan
Isi jalur atau _path_ untuk file Anda.

Di file `package.json` pada root folder `earl-vscode`.

Pada bagian baris:
```json
        "earl.interpreterPath": {
          "type": "string",
          "default": "node /jalur/ke/earl-lang/index.js",
          "description": "Perintah atau jalur untuk menjalankan interpreter Earl. Contoh: 'node C:\Users\NamaAnda\Dokumen\earl-lang\index.js'"
        }
```
Pada bagian ini:
```json
"default": "node /jalur/ke/earl-lang/index.js",
```
Bagian `/jalur/ke/earl-lang/index.js` itu harus Anda ganti dengan jalur sebenarnya ke file `index.js` interpreter Earl di komputer Anda.

- Windows
  ```
  node C:\Pengguna\NamaAnda\Dokumen\earl-lang\index.js
  ```
- Linux atau macOS
  ```
  node /rumah/namaanda/Proyek/earl-lang/index.js
  ```
  atau
  ```
  node ~/Proyek/earl-lang/index.js
  ```

Dengan catatan:
- Pastikan `node` sudah ada di PATH (bisa periksa dengan `node -v`).
- Pastikan file `index.js` di repo `earl-lang` memang bisa dipanggil langsung dengan `node index.js file.earl`.

## Cara Menjalankan
1. Klon repo `earl-vscode`
2. Jalankan:
   ```
   npm install
   npm run watch
   ```
3. Buka folder `earl-vscode` di VS Code.
4. Tekan `F5` -> terbuka VS Code baru (_Extension Development Host_).
5. Buat file `contoh.earl`, coba tulis kode Earl.
6. Jalankan command `Jalankan Earl File` dari Command Palette (`Ctrl+Shift+P`)
