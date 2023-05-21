import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>式Eの評価の一部として、式Eが中核の定数式になるのを妨げるライブラリ関数の呼び出し</p>
</>

const DefnsNonconstLibcall: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.nonconst.libcall">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.35" title="non-constant library call" link="/intro.defs/defns.nonconst.libcall" linkString="defns.nonconst.libcall" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.35" title="non-constant library call" link="/intro.defs/defns.nonconst.libcall" linkString="defns.nonconst.libcall" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsNonconstLibcall;