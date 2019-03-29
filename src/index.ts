import { app, BrowserWindow } from 'electron';
import * as _ from "lodash";

interface GlobalSpace extends NodeJS.Global {
  mainWindow?: BrowserWindow | null
}
const globalSpace = (global as any) as GlobalSpace;

const createWindow = () => {
  globalSpace.mainWindow = null;
  
  globalSpace.mainWindow = new BrowserWindow({ show:true });
  globalSpace.mainWindow.loadURL(`file://${__dirname}/index.html`);
  globalSpace.mainWindow.on('closed', () => app.quit());

  globalSpace.mainWindow && globalSpace.mainWindow.webContents.openDevTools();
}
app.on('ready', createWindow);
app.on('window-all-closed', () => app.quit());

