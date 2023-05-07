import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsConstSubexpr: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.constant subexpression">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.14" title="defns.const.subexpr" link="/intro.defs/constant subexpression" linkString="constant subexpression" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.14" title="defns.const.subexpr" link="/intro.defs/constant subexpression" linkString="constant subexpression" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsConstSubexpr;