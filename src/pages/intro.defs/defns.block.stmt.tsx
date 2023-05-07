import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<statement>"} 複数のstatementの集まり</p>
</>

const DefnsBlockStmt: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.block.stmt">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.8" title="block" link="/intro.defs/defns.block.stmt" linkString="defns.block.stmt" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.8" title="block" link="/intro.defs/defns.block.stmt" linkString="defns.block.stmt" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsBlockStmt;