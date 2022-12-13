import { Commands } from './commands'
import { BatchPayload } from './payloads'
import { CompaniesMethods } from './services/companies/methods'
import { ContactsMethods } from './services/contacts/methods'
import { DealsMethods } from './services/deals/methods'
import { LeadsMethods } from './services/leads/methods'
import { StatusesMethods } from './services/statuses/methods'
import { UsersMethods } from './services/users/methods'
import { Diff } from './utils/Diff'
import { ExtractValue } from './utils/ExtractValue'
export declare enum Method {
  BATCH = 'batch',
  CRM_COMPANY_FIELDS = 'crm.company.fields',
  CRM_COMPANY_ADD = 'crm.company.add',
  CRM_COMPANY_UPDATE = 'crm.company.update',
  CRM_COMPANY_GET = 'crm.company.get',
  CRM_COMPANY_LIST = 'crm.company.list',
  CRM_CONTACT_FIELDS = 'crm.contact.fields',
  CRM_CONTACT_ADD = 'crm.contact.add',
  CRM_CONTACT_UPDATE = 'crm.contact.update',
  CRM_CONTACT_GET = 'crm.contact.get',
  CRM_CONTACT_LIST = 'crm.contact.list',
  CRM_DEAL_FIELDS = 'crm.deal.fields',
  CRM_DEAL_ADD = 'crm.deal.add',
  CRM_DEAL_UPDATE = 'crm.deal.update',
  CRM_DEAL_GET = 'crm.deal.get',
  CRM_DEAL_LIST = 'crm.deal.list',
  CRM_DEAL_CATEGORY_DEFAULT_GET = 'crm.dealcategory.default.get',
  CRM_LEAD_FIELDS = 'crm.lead.fields',
  CRM_LEAD_ADD = 'crm.lead.add',
  CRM_LEAD_UPDATE = 'crm.lead.update',
  CRM_LEAD_GET = 'crm.lead.get',
  CRM_LEAD_LIST = 'crm.lead.list',
  CRM_STATUS_FIELDS = 'crm.status.fields',
  CRM_STATUS_ADD = 'crm.status.add',
  CRM_STATUS_DELETE = 'crm.status.delete',
  CRM_STATUS_GET = 'crm.status.get',
  CRM_STATUS_LIST = 'crm.status.list',
  CRM_STATUS_UPDATE = 'crm.status.update',
  USER_FIELDS = 'user.fields',
  USER_GET = 'user.get'
}
declare const LISTABLE_METHODS: readonly [
  Method.CRM_COMPANY_LIST,
  Method.CRM_CONTACT_LIST,
  Method.CRM_DEAL_LIST,
  Method.CRM_LEAD_LIST
]
export declare type ListableMethod = typeof LISTABLE_METHODS[number]
export declare type GettableMethod = Diff<Method, ListableMethod>
type MethodsMap = {
  readonly [key: string]: {
    readonly type: unknown
    readonly payload: unknown
    readonly params: Record<string, any>
  }
}
export type ListParams = {
  readonly start?: number
  readonly order?: {
    readonly [key: string]: string
  }
  readonly filter?: {
    readonly [key: string]: string | number
  }
  readonly select?: readonly string[]
}
export type Methods = {
  readonly [Method.BATCH]: {
    readonly type: unknown
    readonly payload: BatchPayload<unknown>
    readonly params: Commands
  }
} & MethodsMap &
CompaniesMethods &
ContactsMethods &
DealsMethods &
LeadsMethods &
StatusesMethods &
UsersMethods
export declare type MethodData<M extends Method> = ExtractValue<Methods, M>
export declare type MethodPayloadType<M extends Method> = MethodData<M>['type']
export declare type MethodPayload<M extends Method> = MethodData<M>['payload']
export declare type MethodParams<M extends Method> = MethodData<M>['params']
export {}
