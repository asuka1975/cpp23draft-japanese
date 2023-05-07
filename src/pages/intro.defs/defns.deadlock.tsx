import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsDeadlock: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.deadlock">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.15" title="deadlock" link="/intro.defs/defns.deadlock" linkString="defns.deadlock" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.15" title="deadlock" link="/intro.defs/defns.deadlock" linkString="defns.deadlock" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDeadlock;