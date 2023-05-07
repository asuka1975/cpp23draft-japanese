import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsIllFormed: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.ill.formed">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.25" title="ill-formed program" link="/intro.defs/defns.ill.formed" linkString="defns.ill.formed" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.25" title="ill-formed program" link="/intro.defs/defns.ill.formed" linkString="defns.ill.formed" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsIllFormed;