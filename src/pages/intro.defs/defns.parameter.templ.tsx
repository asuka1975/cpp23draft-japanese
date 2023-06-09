import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<テンプレート>"} <a href="/temp.pre#template-parameter-list">template-parameter-list</a>のメンバ</p>
</>

const DefnsParameterTempl: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.parameter.templ">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.40" title="parameter" link="/intro.defs/defns.parameter.templ" linkString="defns.parameter.templ" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.40" title="parameter" link="/intro.defs/defns.parameter.templ" linkString="defns.parameter.templ" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsParameterTempl;