import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsProgDefType: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.program-defined type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.43" title="defns.prog.def.type" link="/intro.defs/program-defined type" linkString="program-defined type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.43" title="defns.prog.def.type" link="/intro.defs/program-defined type" linkString="program-defined type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsProgDefType;