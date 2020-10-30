async function showUI() {
    // load plugin with confugured w/h
    const rawWidth = await figma.clientStorage.getAsync("width")
    const rawHeight = await figma.clientStorage.getAsync("height")
    let width = 375
    if (rawWidth) {
        width = parseInt(rawWidth)
    }
    let height = 812
    if (rawHeight) {
        height = parseInt(rawHeight)
    }
    figma.showUI(__html__, { width: width, height: height });
}


showUI()

function run() {

}

figma.on("selectionchange", () => {
    run();
});

figma.ui.onmessage = (msg) => {

};