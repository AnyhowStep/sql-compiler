import {CreateLogFileGroupAddRedoFile} from "./create-log-file-group-add-redo-file";
import {CreateLogFileGroupAddUndoFile} from "./create-log-file-group-add-undo-file";

export type CreateLogFileGroupAddFile =
    | CreateLogFileGroupAddUndoFile
    | CreateLogFileGroupAddRedoFile
;
