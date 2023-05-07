import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsObserver: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.observer">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.37" title="observer function" link="/intro.defs/defns.observer" linkString="defns.observer" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.37" title="observer function" link="/intro.defs/defns.observer" linkString="defns.observer" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsObserver;