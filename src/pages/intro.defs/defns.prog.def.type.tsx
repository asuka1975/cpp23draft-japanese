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
        <div id="defns.defns.prog.def.type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.43" title="program-defined type" link="/intro.defs/defns.prog.def.type" linkString="defns.prog.def.type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.43" title="program-defined type" link="/intro.defs/defns.prog.def.type" linkString="defns.prog.def.type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsProgDefType;