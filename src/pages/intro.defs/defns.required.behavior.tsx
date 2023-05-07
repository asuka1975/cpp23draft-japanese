import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRequiredBehavior: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.required behavior">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.49" title="defns.required.behavior" link="/intro.defs/required behavior" linkString="required behavior" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.49" title="defns.required.behavior" link="/intro.defs/required behavior" linkString="required behavior" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRequiredBehavior;