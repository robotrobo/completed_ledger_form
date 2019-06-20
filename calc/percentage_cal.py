import sys

fa1_marks = int(sys.argv[1])
fa2_marks = int(sys.argv[2])
fa_sum = fa1_marks + fa2_marks
fa_tot = 25*5

fa_perc = fa_sum / (fa_tot * 2) * 100
fa_contrib = 0.2 * fa_perc
print(f'fa_contribution = {fa_contrib}')

term1_marks = int(sys.argv[3])
term_tot = 70 + 70 + 70 + 80 + 100
term1_contrib = (term1_marks/term_tot)*30
print(f'term1_contribution = {term1_contrib}')

final_marks = int(sys.argv[4])
final_contrib = (final_marks/term_tot)*50
print(f'final_contribution = {final_contrib}')

print(f'total = {fa_contrib + term1_contrib + final_contrib}')
