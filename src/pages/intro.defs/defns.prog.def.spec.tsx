import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsProgDefSpec: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.program-defined specialization">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.42" title="defns.prog.def.spec" link="/intro.defs/program-defined specialization" linkString="program-defined specialization" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.42" title="defns.prog.def.spec" link="/intro.defs/program-defined specialization" linkString="program-defined specialization" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsProgDefSpec;