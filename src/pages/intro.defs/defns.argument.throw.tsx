import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<throw式>"} throwのオペランド</p>
</>

const DefnsArgumentThrow: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.argument.throw">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.5" title="argument" link="/intro.defs/defns.argument.throw" linkString="defns.argument.throw" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.5" title="argument" link="/intro.defs/defns.argument.throw" linkString="defns.argument.throw" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsArgumentThrow;