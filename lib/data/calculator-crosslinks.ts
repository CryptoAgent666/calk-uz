/**
 * Cross-category internal links for all 78 calculators.
 * Each calculator maps to 3–5 related calculators from DIFFERENT categories
 * to improve internal linking and SEO.
 */
export const CROSS_LINKS: Record<string, string[]> = {
  // =============================================
  // TAX (10)
  // =============================================
  'income-tax': ['salary', 'vat', 'self-employed', 'ip-calculator', 'pension'],
  'vat': ['income-tax', 'corporate-tax', 'vat-threshold', 'turnover-tax', 'margin'],
  'vat-threshold': ['vat', 'turnover-tax', 'ip-calculator', 'llc-calculator'],
  'property-tax': ['apartment-cost', 'land-tax', 'renovation', 'rental'],
  'land-tax': ['property-tax', 'apartment-cost', 'rental', 'renovation'],
  'vehicle-tax': ['customs', 'osago', 'fuel-consumption', 'auto-credit'],
  'corporate-tax': ['vat', 'turnover-tax', 'llc-calculator', 'margin', 'roi'],
  'tax-penalty': ['income-tax', 'vat', 'property-tax', 'land-tax'],
  'self-employed': ['income-tax', 'ip-calculator', 'turnover-tax', 'pension'],
  'turnover-tax': ['vat', 'vat-threshold', 'ip-calculator', 'self-employed', 'corporate-tax'],

  // =============================================
  // SALARY (8)
  // =============================================
  'salary': ['income-tax', 'employer-cost', 'vacation-pay', 'pension', 'currency-converter'],
  'vacation-pay': ['salary', 'sick-leave', 'severance', 'maternity'],
  'sick-leave': ['salary', 'vacation-pay', 'maternity', 'severance'],
  'maternity': ['sick-leave', 'salary', 'vacation-pay', 'calories', 'pregnancy'],
  'severance': ['salary', 'vacation-pay', 'alimony', 'income-tax'],
  'alimony': ['salary', 'severance', 'income-tax', 'credit'],
  'overtime': ['salary', 'employer-cost', 'income-tax', 'vacation-pay'],
  'pension': ['salary', 'income-tax', 'deposit', 'self-employed'],

  // =============================================
  // CREDIT (6)
  // =============================================
  'credit': ['deposit', 'mortgage', 'auto-credit', 'early-repayment', 'refinancing'],
  'mortgage': ['credit', 'apartment-cost', 'property-tax', 'deposit', 'renovation'],
  'auto-credit': ['credit', 'customs', 'car-leasing', 'osago', 'vehicle-tax'],
  'installment': ['credit', 'discount', 'mortgage', 'early-repayment'],
  'early-repayment': ['credit', 'mortgage', 'refinancing', 'deposit'],
  'refinancing': ['credit', 'mortgage', 'early-repayment', 'bank-rates'],

  // =============================================
  // DEPOSIT (3)
  // =============================================
  'deposit': ['credit', 'compound-interest', 'bank-rates', 'currency-converter', 'roi'],
  'compound-interest': ['deposit', 'deposit-comparison', 'roi', 'percentage'],
  'deposit-comparison': ['deposit', 'compound-interest', 'bank-rates', 'currency-converter'],

  // =============================================
  // CURRENCY (3)
  // =============================================
  'currency-converter': ['bank-rates', 'money-transfer', 'remittances', 'deposit'],
  'bank-rates': ['currency-converter', 'deposit', 'deposit-comparison', 'money-transfer'],
  'money-transfer': ['currency-converter', 'bank-rates', 'remittances', 'salary'],

  // =============================================
  // AUTO (5)
  // =============================================
  'customs': ['vehicle-tax', 'osago', 'auto-credit', 'fuel-consumption', 'car-leasing'],
  'osago': ['vehicle-tax', 'customs', 'auto-credit', 'trip-cost'],
  'fuel-consumption': ['trip-cost', 'customs', 'vehicle-tax', 'car-leasing'],
  'trip-cost': ['fuel-consumption', 'currency-converter', 'osago', 'discount'],
  'car-leasing': ['auto-credit', 'customs', 'credit', 'vehicle-tax'],

  // =============================================
  // UTILITIES (6)
  // =============================================
  'electricity': ['gas', 'water', 'heating', 'utilities-total', 'internet'],
  'gas': ['electricity', 'water', 'heating', 'utilities-total'],
  'water': ['electricity', 'gas', 'heating', 'utilities-total'],
  'heating': ['electricity', 'gas', 'water', 'utilities-total'],
  'internet': ['electricity', 'utilities-total', 'discount', 'percentage'],
  'utilities-total': ['electricity', 'gas', 'water', 'heating', 'apartment-cost'],

  // =============================================
  // REAL ESTATE (4)
  // =============================================
  'apartment-cost': ['mortgage', 'property-tax', 'rental', 'renovation', 'deposit'],
  'rental': ['apartment-cost', 'mortgage', 'property-tax', 'utilities-total'],
  'renovation': ['apartment-cost', 'credit', 'area', 'mortgage'],
  'moving': ['apartment-cost', 'rental', 'renovation', 'trip-cost'],

  // =============================================
  // BUSINESS (6)
  // =============================================
  'ip-calculator': ['self-employed', 'turnover-tax', 'llc-calculator', 'employer-cost', 'income-tax'],
  'llc-calculator': ['ip-calculator', 'corporate-tax', 'vat', 'employer-cost', 'roi'],
  'margin': ['break-even', 'roi', 'vat', 'discount', 'percentage'],
  'break-even': ['margin', 'roi', 'llc-calculator', 'credit'],
  'roi': ['deposit', 'compound-interest', 'margin', 'break-even'],
  'employer-cost': ['salary', 'income-tax', 'ip-calculator', 'pension', 'llc-calculator'],

  // =============================================
  // HEALTH (5)
  // =============================================
  'calories': ['bmi', 'ideal-weight', 'macros', 'pregnancy'],
  'bmi': ['calories', 'ideal-weight', 'macros', 'unit-converter'],
  'ideal-weight': ['bmi', 'calories', 'macros', 'unit-converter'],
  'macros': ['calories', 'bmi', 'ideal-weight', 'percentage'],
  'pregnancy': ['maternity', 'sick-leave', 'date-calc', 'calories'],

  // =============================================
  // EDUCATION (3)
  // =============================================
  'tuition': ['education-loan', 'credit', 'gpa', 'installment'],
  'education-loan': ['tuition', 'credit', 'early-repayment', 'refinancing'],
  'gpa': ['tuition', 'percentage', 'education-loan'],

  // =============================================
  // RELIGION (4)
  // =============================================
  'zakat': ['fitr-sadaka', 'fidiya-sadaka', 'kurban', 'currency-converter'],
  'fitr-sadaka': ['zakat', 'fidiya-sadaka', 'kurban', 'brv'],
  'fidiya-sadaka': ['zakat', 'fitr-sadaka', 'kurban', 'brv'],
  'kurban': ['zakat', 'fitr-sadaka', 'fidiya-sadaka', 'currency-converter'],

  // =============================================
  // TOOLS (8)
  // =============================================
  'percentage': ['discount', 'vat', 'margin', 'compound-interest'],
  'discount': ['percentage', 'margin', 'installment', 'credit'],
  'date-calc': ['pregnancy', 'age', 'vacation-pay', 'sick-leave'],
  'area': ['apartment-cost', 'renovation', 'land-tax', 'unit-converter'],
  'unit-converter': ['area', 'currency-converter', 'fuel-consumption', 'bmi'],
  'number-to-words': ['salary', 'percentage', 'random', 'brv'],
  'age': ['date-calc', 'pension', 'pregnancy', 'bmi'],
  'random': ['percentage', 'number-to-words', 'discount', 'gpa'],

  // =============================================
  // UNIQUE UZ (7)
  // =============================================
  'passport-fees': ['state-duties', 'visa-cost', 'brv', 'currency-converter'],
  'state-duties': ['passport-fees', 'brv', 'visa-cost', 'property-tax'],
  'wedding': ['credit', 'installment', 'currency-converter', 'discount'],
  'cotton-yield': ['area', 'unit-converter', 'currency-converter', 'percentage'],
  'remittances': ['money-transfer', 'currency-converter', 'bank-rates', 'salary'],
  'visa-cost': ['passport-fees', 'state-duties', 'currency-converter', 'brv'],
  'brv': ['state-duties', 'passport-fees', 'salary', 'income-tax', 'fitr-sadaka'],
}
