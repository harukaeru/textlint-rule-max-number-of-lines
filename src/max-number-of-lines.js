// LICENSE : MIT
"use strict";
import ObjectAssign from "object-assign";
const defaultOptions = {max: 300};
export default function (context, options = defaultOptions) {
    options = ObjectAssign({}, defaultOptions, options);
    let max = options.max;
    let {Syntax, RuleError, report, getSource} = context;
    return {
        [Syntax.Document](node) {
            var lines = getSource(node);
            var len = lines.length;
            if (len > max) {
                report(node, new RuleError(`Document is too long(number of lines: ${len}).`));
            }
        }
    }
}