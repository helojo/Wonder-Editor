import {insertDragedTreeNodeToTargetTreeNode, getSceneTreeData, updateTreeNodeParent, setSceneTreeData} from "./SceneTreeBuss";
import { Map } from "immutable";
import { ISceneTreeGameObject } from "../interface/ISceneTree";

export const getSceneTreeDataBuss = getSceneTreeData;

export const setSceneTreeDataBuss = setSceneTreeData;

export const insertDragedTreeNodeToTargetTreeNodeBuss = insertDragedTreeNodeToTargetTreeNode;

export const updateTreeNodeParentBuss = updateTreeNodeParent;
