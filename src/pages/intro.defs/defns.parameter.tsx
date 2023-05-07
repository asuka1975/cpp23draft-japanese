import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsParameter: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.parameter">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.38" title="defns.parameter" link="/intro.defs/parameter" linkString="parameter" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.38" title="defns.parameter" link="/intro.defs/parameter" linkString="parameter" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsParameter;