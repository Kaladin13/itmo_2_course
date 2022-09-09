let WIDTH = 400;
let HEIGHT = 400;

let CANVAS = null;

const AXES_COLOR = '#a2a2a2';
const CIRCLE_COLOR = '#234a23';
const TRIANGLE_COLOR = '#707023';
const RECTANGLE_COLOR = '#232370';

let scale = 0.014;

let attemptsArray = [];

let DEFAULT_R = 3;

drawPlot = () => {
    console.log("Starting drawing plot!")
    CANVAS = SVG()
        .addTo('#plot')
        .size(WIDTH, HEIGHT);

    if (attemptsArray.length === 0) {
        initPlot();
    } else {
        drawPlotWithPoints(attemptsArray);
    }
}

initPlot = () => {
    console.log("Строим без точек.")
    drawArea(DEFAULT_R);
    drawAxes();
    drawAxesScaleLabels(DEFAULT_R);
    drawRValue(DEFAULT_R);
}

drawPlotWithPoints = (attemptsArray) => {
    console.log("Строим вместе с точками.")
    drawArea(DEFAULT_R);
    drawAxes();
    drawAxesScaleLabels(DEFAULT_R);
    attemptsArray.forEach(point => drawPoint(point.x, point.y, point.result, DEFAULT_R));
    drawRValue(DEFAULT_R);
}

convertX = (x) => {
    return (WIDTH / 2) + x / (2 * scale);
}

convertY = (y) => {
    return (HEIGHT / 2) - y / (2 * scale);
}

convertToCoordinatesX = (xPoint) => {
    return (xPoint - (WIDTH / 2)) * 2 * scale;
}

convertToCoordinatesY = (yPoint) => {
    return ((HEIGHT / 2) - yPoint) * 2 * scale;
}

drawAxes = () => {
    const arrowSize = 10;
    // x axe
    CANVAS.line(0, (HEIGHT / 2), WIDTH, (HEIGHT / 2)).stroke({width: 1, color: AXES_COLOR});
    // x axe arrow
    const triangleX = (WIDTH - arrowSize) + ',' + (HEIGHT / 2 - arrowSize / 2) + ' ' +
        (WIDTH - arrowSize) + ',' + (HEIGHT / 2 + arrowSize / 2) + ' ' +
        (WIDTH) + ',' + (HEIGHT / 2);
    CANVAS.polygon(triangleX).fill(AXES_COLOR);
    // x axe label
    CANVAS.text('x').font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(WIDTH - 2 * arrowSize, HEIGHT / 2 - 2.5 * arrowSize);

    // y axe
    CANVAS.line(WIDTH / 2, 0, WIDTH / 2, HEIGHT).stroke({width: 1, color: AXES_COLOR});
    // y axe arrow
    const triangleY = (WIDTH / 2 - arrowSize / 2) + ',' + (arrowSize) + ' ' +
        (WIDTH / 2 + arrowSize / 2) + ',' + (arrowSize) + ' ' +
        (WIDTH / 2) + ',' + (0);
    CANVAS.polygon(triangleY).fill(AXES_COLOR);
    // y axe label
    CANVAS.text('y').font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(WIDTH / 2 + 1.5 * arrowSize, arrowSize / 2);
}

drawScaleLabel = (xStart, xStop, yStart, yStop, labelX, labelY, label) => {
    CANVAS.line(convertX(xStart), convertY(yStart), convertX(xStop), convertY(yStop))
        .stroke({width: 2, color: AXES_COLOR});
    CANVAS.text(label).font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(convertX(labelX), convertY(labelY));
}

drawRValue = (r) => {
    console.log('Start drawing R value:' + r);
    CANVAS.text('R = ' + parseFloat(r).toFixed(3)).font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(WIDTH - 77, HEIGHT - 50);
}

drawAxesScaleLabels = (r) => {
    const hatchLen = 0.1;
    console.log("R value while drawing labels: " + r);
    //x axis labels
    drawScaleLabel(-r, -r, hatchLen, -hatchLen, -r, -2 * hatchLen, "-R");
    drawScaleLabel(-r / 2, -r / 2, hatchLen, -hatchLen, -r / 2, -2 * hatchLen, "-R/2");
    drawScaleLabel(r / 2, r / 2, hatchLen, -hatchLen, r / 2, -2 * hatchLen, "R/2");
    drawScaleLabel(r, r, hatchLen, -hatchLen, r, -2 * hatchLen, "R");

    //y axis labels
    drawScaleLabel(hatchLen, -hatchLen, -r, -r, -4 * hatchLen, -r, "-R");
    drawScaleLabel(hatchLen, -hatchLen, -r / 2, -r / 2, -4 * hatchLen, -r / 2, "-R/2");
    drawScaleLabel(hatchLen, -hatchLen, r / 2, r / 2, -4 * hatchLen, r / 2, "R/2");
    drawScaleLabel(hatchLen, -hatchLen, r, r, -4 * hatchLen, r, "R");
}

drawArea = (r) => {
    const circlePath = 'M ' + (convertX(0)) + ', ' + (convertY(r)) + ' ' +
        'A' + r / (2 * scale) + ', ' + r / (2 * scale) + ' ' +
        '90 0,1 ' + (convertX(r)) + ', ' + (convertY(0)) + ' L 200,200 Z'
    const triangle = (convertX(0)) + ', ' + (convertY(0)) + ' ' +
        (convertX(r / 2)) + ', ' + (convertY(0)) + ' ' +
        (convertX(0)) + ', ' + (convertY(-r / 2));
    CANVAS.path(circlePath)
        .fill(CIRCLE_COLOR)
        .move(convertX(0), convertY(r));
    CANVAS.rect(r / (2 * scale), r / (4 * scale))
        .fill(RECTANGLE_COLOR)
        .move(convertX(-r), convertY(r / 2));
    CANVAS.polygon(triangle)
        .fill(TRIANGLE_COLOR);
}

drawPoint = (x, y, result, pointScale) => {
    let color = (result === "false" || result === undefined) ? '#f00' : '#0f0';
    CANVAS.circle(pointScale * 2).fill(color).move(convertX(x) - pointScale, convertY(y) - pointScale);
}

clickPointEvent = (event) => {
    let coordinates = getCoords(event);
    console.log("Click working at coordinates: " + coordinates.x + ", " + coordinates.y + ", " + coordinates.r);
    if (validateR(coordinates.r)) sendGraphRequest(coordinates);
    else injectRAlert(coordinates.r);
}

getCoords = (event) => {
    let coordinates = {};
    coordinates.x = convertToCoordinatesX(event.pageX - 99.5);
    coordinates.y = convertToCoordinatesY(event.pageY - 175);
    coordinates.r = $("#R_value").val();
    return coordinates;
}

switchRadius = (values) => {
    console.log("Radius switched to: " + values.r);
    DEFAULT_R = values.r;
    $('#plot').empty();
    drawPlot();
}

addPoint = (x, y, r, result) => {
    attemptsArray.push({
        x: x,
        y: y,
        r: r,
        result: result,
    });
}

resetDots = (newAttemptsArray) => {
    if (newAttemptsArray.length !== 0) {
        attemptsArray = [];
        newAttemptsArray.forEach(dot => {
            attemptsArray.push(JSON.parse(dot));
        })
    }
}

cleanPlot = () => {
    $('#plot').empty();
    attemptsArray = [];
    drawPlot();
}