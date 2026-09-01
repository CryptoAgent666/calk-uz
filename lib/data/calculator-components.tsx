import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

const c = (name: string) => dynamic(() => import(`@/components/calculators/${name}`), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
    </div>
  ),
})

export const CALCULATOR_COMPONENTS: Record<string, ComponentType> = {
  // Tax (10)
  'income-tax': c('IncomeTaxCalculator'),
  'vat': c('VatCalculator'),
  'vat-threshold': c('VatThresholdCalculator'),
  'property-tax': c('PropertyTaxCalculator'),
  'land-tax': c('LandTaxCalculator'),
  'vehicle-tax': c('VehicleTaxCalculator'),
  'corporate-tax': c('CorporateTaxCalculator'),
  'tax-penalty': c('TaxPenaltyCalculator'),
  'self-employed': c('SelfEmployedCalculator'),
  'turnover-tax': c('TurnoverTaxCalculator'),

  // Salary (8)
  'salary': c('SalaryCalculator'),
  'vacation-pay': c('VacationPayCalculator'),
  'sick-leave': c('SickLeaveCalculator'),
  'maternity': c('MaternityCalculator'),
  'severance': c('SeveranceCalculator'),
  'alimony': c('AlimonyCalculator'),
  'overtime': c('OvertimeCalculator'),
  'pension': c('PensionCalculator'),

  // Credit (6)
  'credit': c('CreditCalculator'),
  'mortgage': c('MortgageCalculator'),
  'auto-credit': c('AutoCreditCalculator'),
  'installment': c('InstallmentCalculator'),
  'early-repayment': c('EarlyRepaymentCalculator'),
  'refinancing': c('RefinancingCalculator'),

  // Deposit (3)
  'deposit': c('DepositCalculator'),
  'compound-interest': c('CompoundInterestCalculator'),
  'deposit-comparison': c('DepositComparisonCalculator'),

  // Currency (3)
  'currency-converter': c('CurrencyConverterCalculator'),
  'bank-rates': c('BankRatesCalculator'),
  'money-transfer': c('MoneyTransferCalculator'),

  // Auto (5)
  'customs': c('CustomsCalculator'),
  'osago': c('OsagoCalculator'),
  'fuel-consumption': c('FuelConsumptionCalculator'),
  'trip-cost': c('TripCostCalculator'),
  'car-leasing': c('CarLeasingCalculator'),

  // Utilities (6)
  'electricity': c('ElectricityCalculator'),
  'gas': c('GasCalculator'),
  'water': c('WaterCalculator'),
  'heating': c('HeatingCalculator'),
  'internet': c('InternetCalculator'),
  'utilities-total': c('UtilitiesTotalCalculator'),

  // Real Estate (4)
  'apartment-cost': c('ApartmentCostCalculator'),
  'rental': c('RentalCalculator'),
  'renovation': c('RenovationCalculator'),
  'moving': c('MovingCalculator'),

  // Business (6)
  'ip-calculator': c('IpCalculator'),
  'llc-calculator': c('LlcCalculator'),
  'margin': c('MarginCalculator'),
  'break-even': c('BreakEvenCalculator'),
  'roi': c('RoiCalculator'),
  'employer-cost': c('EmployerCostCalculator'),

  // Health (5)
  'calories': c('CaloriesCalculator'),
  'bmi': c('BmiCalculator'),
  'ideal-weight': c('IdealWeightCalculator'),
  'macros': c('MacrosCalculator'),
  'pregnancy': c('PregnancyCalculator'),

  // Education (3)
  'tuition': c('TuitionCalculator'),
  'education-loan': c('EducationLoanCalculator'),
  'gpa': c('GpaCalculator'),

  // Religion (4)
  'zakat': c('ZakatCalculator'),
  'fitr-sadaka': c('FitrSadakaCalculator'),
  'fidiya-sadaka': c('FidiyaSadakaCalculator'),
  'kurban': c('KurbanCalculator'),

  // Tools (8)
  'percentage': c('PercentageCalculator'),
  'discount': c('DiscountCalculator'),
  'date-calc': c('DateCalcCalculator'),
  'area': c('AreaCalculator'),
  'unit-converter': c('UnitConverterCalculator'),
  'number-to-words': c('NumberToWordsCalculator'),
  'age': c('AgeCalculator'),
  'random': c('RandomCalculator'),

  // Unique UZ (7)
  'passport-fees': c('PassportFeesCalculator'),
  'state-duties': c('StateDutiesCalculator'),
  'wedding': c('WeddingCalculator'),
  'cotton-yield': c('CottonYieldCalculator'),
  'remittances': c('RemittancesCalculator'),
  'visa-cost': c('VisaCostCalculator'),
  'brv': c('BrvCalculator'),
}
