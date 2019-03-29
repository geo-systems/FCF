# How to reproduce

On Windows 10, install Node v10.15.3 and install `yarn`:

```
npm install -g yarn
```

Then follow the installation prerequisites for 
[electron-windows-store](https://github.com/felixrieseberg/electron-windows-store).

Edit `package.json` and replace `windowsStoreConfig.windowsKit` with the path to your `Windows 10 SDK`.

Then from a PowerShell terminal in the project folder execute:

```
> yarn install
> yarn run make
```

After running the above commands, you get the following error:

```
MakeAppx : error: Package creation failed.
MakeAppx : error: 0x8007007b - The filename, directory name, or volume label syntax is incorrect.

× Making for target: appx - On platform: win32 - For arch: x64
```