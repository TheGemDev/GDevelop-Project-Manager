import OptionalRequire from './OptionalRequire'

const fs = OptionalRequire("fs");
const electron = OptionalRequire("electron");
const app = electron ? electron.remote.app : null;
const path = OptionalRequire("path");

const docDir = app ? app.getPath("documents") : "~";
const projectDir = "\\GDevelop projects";

const requirePath = {
    docDir,
    projectDir,
    fs,
    path
}

export default requirePath



 