import BpmnJS from 'bpmn-js';

const viewer = new BpmnJS({
    container: '#canvas'
});

async function openDiagram() {

    const response = await fetch('/bpmn/OpenUPExp Process.bpmn');

    const xml = await response.text();

    await viewer.importXML(xml);

    viewer.get('canvas').zoom('fit-viewport');
}

openDiagram();