# Code Citations

## License: unknown
https://github.com/Scerutti/Portfolio/tree/9e13aeb35a7c902570249e41b70c31369066bce4/.github/workflows/main.yml

```
branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node
```


## License: unknown
https://github.com/NufailIsmath/staking-contract/tree/07ff3ac36611d385ee29d8e7d3d73862ae28ab36/.github/workflows/ci-cd.yml

```
/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup
```


## License: MPL_2_0
https://github.com/victim-alt/speak-dumbledore/tree/56b9660981bb27383ca92c98a75744184969bc2e/.github/workflows/codeql-analysis.yml

```
- main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name
```


## License: unknown
https://github.com/soloveiiko/bubu-store/tree/061babd1e674b8264a1071fd1c3afb8e98f16c3c/.github/workflows/build-css.yml

```
:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
```


## License: unknown
https://github.com/elvinsavio/stamps/tree/b1b08db61de8c51ae057d5dda7ce70500cd64bc8/.github/workflows/main.yml

```
runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm
```

