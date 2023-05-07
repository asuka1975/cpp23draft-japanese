import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsRepositionalStream: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.repositional stream">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.48" title="defns.repositional.stream" link="/intro.defs/repositional stream" linkString="repositional stream" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.48" title="defns.repositional.stream" link="/intro.defs/repositional stream" linkString="repositional stream" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsRepositionalStream;