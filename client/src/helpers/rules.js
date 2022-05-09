import {ROLE} from './roleType';
import { batchStatus as s } from './statusType';

export const batchRule = {
    [ROLE.MANAGER]: [s.CREATED, s.CONFIRM],
    [ROLE.INSPECTOR]: [s.MAT_CHECK, s.QUAL_CHECK],
    [ROLE.PRODUCER]: [s.PRODUCE],
    [ROLE.PACKER]: [s.PACK],
    [ROLE.NONE]: []
};