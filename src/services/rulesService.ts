import { Rule } from '../models';

export class RuleService {
  async findRulesById(rulesIds: number[]) {
    return await Rule.findAll({ where: { id: rulesIds } });
  }
}
