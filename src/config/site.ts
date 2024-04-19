import { TextNode } from '@/components/nodes'
import { Edge, Node } from 'reactflow'

export const nodesConfig = {
	initialNodes: [
{
	id: `1`,
	type: 'textNode',
	data:  {
		label: '1. Built',
		isInitial: true,
	},
	position: { x:  200, y: Math.random()*200 },
},
{
	id: `2`,
	type: 'textNode',
	data:  {
		label: '3. Measure',
		
	},
	position: { x:  600, y: Math.random()*200 },
}
	] as Node[],
	initialEdges: [{ id: 'e1-1', source: '1', target: '2' , animated: true}] as Edge[],
	nodeTypes: {
		textNode: TextNode,
	} as any,
}
