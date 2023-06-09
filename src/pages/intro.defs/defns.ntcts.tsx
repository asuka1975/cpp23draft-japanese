import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} 終端のヌル文字型の値charT()の前に存在する文字型の値の並び</p>
</>

const DefnsNtcts: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.ntcts">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.36" title="NTCTS" link="/intro.defs/defns.ntcts" linkString="defns.ntcts" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.36" title="NTCTS" link="/intro.defs/defns.ntcts" linkString="defns.ntcts" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsNtcts;