import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsParameterMacro: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.parameter.macro">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.39" title="parameter" link="/intro.defs/defns.parameter.macro" linkString="defns.parameter.macro" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.39" title="parameter" link="/intro.defs/defns.parameter.macro" linkString="defns.parameter.macro" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsParameterMacro;