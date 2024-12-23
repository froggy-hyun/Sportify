## Service Link
https://sportify.co.kr

## 2024년 국민체육진흥공단 공공데이터활용 경진대회 수상작 [장려상 4위]
![1 (1)](https://github.com/user-attachments/assets/6c3bf130-05ee-4f83-8e9d-880fd775c12f)
![20](https://github.com/user-attachments/assets/b68bef1a-7e17-4166-a56a-a223555b6fd3)
![28](https://github.com/user-attachments/assets/d724320b-7486-4db5-932c-4d242dd8b898)
![31](https://github.com/user-attachments/assets/f5ae3d3e-f3b5-4b8d-8bcc-776bdb1bd637)
![32](https://github.com/user-attachments/assets/278b5437-d842-4090-8f27-cb3f432603cc)
![33](https://github.com/user-attachments/assets/e7a784e7-6a97-4240-8549-ab76fd1edcf5)
![34](https://github.com/user-attachments/assets/5a2353e6-fbac-43cd-a5e5-af6ac7916f87)
![35](https://github.com/user-attachments/assets/bb26b124-1ad9-4630-b257-264617d3af28)

## 개발 기간

#### 11/4 ~ 12/8

## Architecture
![25](https://github.com/user-attachments/assets/3eb4015d-5350-4d42-ab57-51f9eae0bdb5)

## Team

<table width="950">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>이름</th>
        <td width="100" align="center">송해찬</td>
        <td width="100" align="center">구지혜</td>
        <td width="100" align="center">최성현</td>
        <td width="100" align="center">김희찬</td>
    </tr>
    <tr>
        <th>역할</th>
        <td width="150" align="center">
            Backend <br> DevOps 
        </td>
        <td width="150" align="center">
            Frontend
        </td>
        <td width="150" align="center">
            Backend
        </td>
        <td width="150" align="center">
            Design <br> Frontend
        </td>
    </tr>
    <tr>
        <th>GitHub</th>
        <td width="100" align="center">
            <a href="https://github.com/songhaechan">
                <img src="http://img.shields.io/badge/songhaechan-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/jihye9549">
                <img src="http://img.shields.io/badge/jihye9549-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/froggy-hyun">
                <img src="http://img.shields.io/badge/froggyhyun-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/76Dosu">
                <img src="http://img.shields.io/badge/76Dosu-green?style=social&logo=github"/>
            </a>
        </td>
    </tr>
    </tbody>
</table>
<br>


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
