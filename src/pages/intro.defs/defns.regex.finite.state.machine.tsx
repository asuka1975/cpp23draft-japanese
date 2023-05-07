import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRegexFiniteStateMachine: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.finite state machine">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.22" title="defns.regex.finite.state.machine" link="/intro.defs/finite state machine" linkString="finite state machine" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.22" title="defns.regex.finite.state.machine" link="/intro.defs/finite state machine" linkString="finite state machine" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRegexFiniteStateMachine;