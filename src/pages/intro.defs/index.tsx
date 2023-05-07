import Field from "@/components/Field";
import HeadItem from "@/components/HeadItem";
import DefnsAccess from "./defns.access";
import DefnsArbitraryStream from "./defns.arbitrary.stream";
import DefnsArgument from "./defns.argument";
import DefnsArgumentMacro from "./defns.argument.macro";
import DefnsArgumentThrow from "./defns.argument.throw";
import DefnsArgumentTempl from "./defns.argument.templ";
import DefnsBlock from "./defns.block";
import DefnsRegexCollatingElement from "./defns.regex.collating.element";
import DefnsComponent from "./defns.component"
import DefnsCondSupp from "./defns.cond.supp"
import DefnsConstSubexpr from "./defns.const.subexpr"
import DefnsDeadlock from "./defns.deadlock"
import DefnsDefaultBehaviorImpl from "./defns.default.behavior.impl"
import DefnsDiagnostic from "./defns.diagnostic"
import DefnsDirectNonListInit from "./defns.direct.non.list.init"
import DefnsDynamicType from "./defns.dynamic.type"
import DefnsDynamicTypePrvalue from "./defns.dynamic.type.prvalue"
import DefnsExpressionEquivalent from "./defns.expression.equivalent"
import DefnsRegexFiniteStateMachine from "./defns.regex.finite.state.machine"
import DefnsRegexFormatSpecifier from "./defns.regex.format.specifier"
import DefnsHandler from "./defns.handler"
import DefnsIllFormed from "./defns.ill.formed"
import DefnsImplDefined from "./defns.impl.defined"
import DefnsOrderPtr from "./defns.order.ptr"
import DefnsImplLimits from "./defns.impl.limits"
import DefnsIostreamTemplates from "./defns.iostream.templates"
import DefnsLocaleSpecific from "./defns.locale.specific"
import DefnsRegexMatched from "./defns.regex.matched"
import DefnsModifier from "./defns.modifier"
import DefnsMoveAssign from "./defns.move.assign"
import DefnsMoveConstr from "./defns.move.constr"
import DefnsNonconstLibcall from "./defns.nonconst.libcall"
import DefnsNtcts from "./defns.ntcts"
import DefnsObserver from "./defns.observer"
import DefnsParameter from "./defns.parameter"
import DefnsParameterMacro from "./defns.parameter.macro"
import DefnsParameterTempl from "./defns.parameter.templ"
import DefnsRegexPrimaryEquivalenceClass from "./defns.regex.primary.equivalence.class"
import DefnsProgDefSpec from "./defns.prog.def.spec"
import DefnsProgDefType from "./defns.prog.def.type"
import DefnsProjection from "./defns.projection"
import DefnsReferenceable from "./defns.referenceable"
import DefnsRegexRegularExpression from "./defns.regex.regular.expression"
import DefnsReplacement from "./defns.replacement"
import DefnsRepositionalStream from "./defns.repositional.stream"
import DefnsRequiredBehavior from "./defns.required.behavior"
import DefnsReservedFunction from "./defns.reserved.function"
import DefnsSignature from "./defns.signature"
import DefnsSignatureFriend from "./defns.signature.friend"
import DefnsSignatureTempl from "./defns.signature.templ"
import DefnsSignatureTemplFriend from "./defns.signature.templ.friend"
import DefnsSignatureSpec from "./defns.signature.spec"
import DefnsSignatureMember from "./defns.signature.member"
import DefnsSignatureMemberTempl from "./defns.signature.member.templ"
import DefnsSignatureMemberSpec from "./defns.signature.member.spec"
import DefnsSignatureTemplateHead from "./defns.signature.template.head"
import DefnsStable from "./defns.stable"
import DefnsStaticType from "./defns.static.type"
import DefnsRegexSubexpression from "./defns.regex.subexpression"
import DefnsTraits from "./defns.traits"
import DefnsUnblock from "./defns.unblock"
import DefnsUndefined from "./defns.undefined"
import DefnsUnspecified from "./defns.unspecified"
import DefnsValid from "./defns.valid"
import DefnsWellFormed from "./defns.well.formed"
import DefnsCharacter from "./defns.character";
import DefnsCharacterContainer from "./defns.character.container";
import DefnsBlockStmt from "./defns.block.stmt";

export default function IntroDefs() {
    return (
        <Field>
            <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
            <p>この文書の目的において, ISO/IEC 2382で与えられている用語や定義, ISO 80000-2:2009で与えられている用語, 定義, シンボル, そして以下が該当します. </p>
            <p>以下のURLにおいて, ISOとIECがメンテナンスしている標準化に際して用いた用語集のデータベースがあります. 
            </p>
            <ul>
                <li>ISO オンライン検索プラットフォーム: <a href="https://www.iso.org/obp">https://www.iso.org/obp</a></li>
                <li>IEC Electropedia: <a href="https://www.electropedia.org">https://www.electropedia.org/</a></li>
            </ul>
            <p>
                この文書の一部のみで使われる用語については, 使われたところで英語で定義されます. 
            </p>
            
            <DefnsAccess inner />
            <DefnsArbitraryStream inner />
            <DefnsArgument inner />
            <DefnsArgumentMacro inner />
            <DefnsArgumentThrow inner />
            <DefnsArgumentTempl inner />
            <DefnsBlock inner />
            <DefnsBlockStmt inner />
            <DefnsCharacter inner />
            <DefnsCharacterContainer inner />
            <DefnsRegexCollatingElement inner />
            <DefnsComponent inner />
            <DefnsCondSupp inner />
            <DefnsConstSubexpr inner />
            <DefnsDeadlock inner />
            <DefnsDefaultBehaviorImpl inner />
            <DefnsDiagnostic inner />
            <DefnsDirectNonListInit inner />
            <DefnsDynamicType inner />
            <DefnsDynamicTypePrvalue inner />
            <DefnsExpressionEquivalent inner />
            <DefnsRegexFiniteStateMachine inner />
            <DefnsRegexFormatSpecifier inner />
            <DefnsHandler inner />
            <DefnsIllFormed inner />
            <DefnsImplDefined inner />
            <DefnsOrderPtr inner />
            <DefnsImplLimits inner />
            <DefnsIostreamTemplates inner />
            <DefnsLocaleSpecific inner />
            <DefnsRegexMatched inner />
            <DefnsModifier inner />
            <DefnsMoveAssign inner />
            <DefnsMoveConstr inner />
            <DefnsNonconstLibcall inner />
            <DefnsNtcts inner />
            <DefnsObserver inner />
            <DefnsParameter inner />
            <DefnsParameterMacro inner />
            <DefnsParameterTempl inner />
            <DefnsRegexPrimaryEquivalenceClass inner />
            <DefnsProgDefSpec inner />
            <DefnsProgDefType inner />
            <DefnsProjection inner />
            <DefnsReferenceable inner />
            <DefnsRegexRegularExpression inner />
            <DefnsReplacement inner />
            <DefnsRepositionalStream inner />
            <DefnsRequiredBehavior inner />
            <DefnsReservedFunction inner />
            <DefnsSignature inner />
            <DefnsSignatureFriend inner />
            <DefnsSignatureTempl inner />
            <DefnsSignatureTemplFriend inner />
            <DefnsSignatureSpec inner />
            <DefnsSignatureMember inner />
            <DefnsSignatureMemberTempl inner />
            <DefnsSignatureMemberSpec inner />
            <DefnsSignatureTemplateHead inner />
            <DefnsStable inner />
            <DefnsStaticType inner />
            <DefnsRegexSubexpression inner />
            <DefnsTraits inner />
            <DefnsUnblock inner />
            <DefnsUndefined inner />
            <DefnsUnspecified inner />
            <DefnsValid inner />
            <DefnsWellFormed inner />
        </Field>
    )
}
