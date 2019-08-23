import { Admin, Core } from 'flyteidl';
import { Identifier } from 'models/Common';
import { CompiledNode, ConnectionSet } from 'models/Node';
import { CompiledTask } from 'models/Task';

/** Holds information about all nodes existing in a Workflow graph */
export interface WorkflowTemplate extends Core.IWorkflowTemplate {
    nodes: CompiledNode[];
}

/** A serialized representation of the nodes/connections which exist in a given
 * version of a Workflow
 */
export interface CompiledWorkflow extends Core.ICompiledWorkflow {
    // interface?: CompiledWorkflowInterface;
    template: WorkflowTemplate;
    connections: ConnectionSet;
}

/** A serialized representation of all information needed to execute a specific
 * workflow graph.
 */
export interface CompiledWorkflowClosure extends Core.ICompiledWorkflowClosure {
    primary: CompiledWorkflow;
    subWorkflows?: CompiledWorkflow[];
    tasks: CompiledTask[];
}

/** A serialized representation of all inforamtion about a specific workflow
 * version.
 */
export interface WorkflowClosure extends Admin.IWorkflowClosure {
    compiledWorkflow?: CompiledWorkflowClosure;
}

export interface Workflow extends Admin.IWorkflow {
    closure?: WorkflowClosure;
    id: Identifier;
}

export type WorkflowId = Identifier;
export type WorkflowsMap = Map<string, Workflow>;