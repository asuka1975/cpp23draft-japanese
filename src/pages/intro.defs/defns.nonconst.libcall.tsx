import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsNonconstLibcall: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.non-constant library call">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.35" title="defns.nonconst.libcall" link="/intro.defs/non-constant library call" linkString="non-constant library call" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.35" title="defns.nonconst.libcall" link="/intro.defs/non-constant library call" linkString="non-constant library call" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsNonconstLibcall;