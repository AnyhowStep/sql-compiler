import {cannotExpect, field, greedySkipExpectation, seq, useCustomExtra} from "../../grammar-builder";
import {CustomExtras} from "../custom-extras";
import {TokenKind} from "../token.generated";

export const ColonEqual = useCustomExtra(
    CustomExtras.noExtras,
    seq(
        field("colonToken", cannotExpect(TokenKind.Colon)),
        field("equalToken", greedySkipExpectation(TokenKind.Equal)),
    )
);
