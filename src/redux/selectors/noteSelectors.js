import { createSelector } from "reselect";

export const selectNoteId = createSelector(
  (state) => state.note?.noteId,
  (noteId) => noteId
);

export const selectNoteHeader = createSelector(
  (state) => state.note?.noteHeader,
  (noteHeader) => noteHeader
);

export const selectNoteValue = createSelector(
  (state) => state.note?.noteValue,
  (noteValue) => noteValue
);


export const reselectMain_Header = createSelector(
    (state) => state.configValuesReducer.configResponse?.Main_Header,
    (Main_Header) => {
        return Main_Header;
    }
);

export const reselectisLoading = createSelector(
    (state) => state.configValuesReducer?.isLoading,
    (isLoading) => {
        return isLoading;
    }
);