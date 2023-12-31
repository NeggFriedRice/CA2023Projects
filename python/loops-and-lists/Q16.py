def user_input():
    user_skills = []
    while True:
        user_lang = input("What coding languages do you know? ").lower()
        if user_lang in language_scores.keys():
            user_skills.append(user_lang)
        elif user_lang == "done":
            break
        else:
            print("This is not a language in the list")
    return user_skills

def calculate_score(userSkills, langDict):
    sum = 0
    for k, v in langDict.items():
        if k in userSkills:
            sum += v

    return sum
   
def more_skills(userSkills, langDict):
    for k, v in langDict.items():
        if k not in userSkills:
            print(k.capitalize() + f" would increase your score by {v}")

stars = "************************************************"
welcome_message = f"""
{stars}
**  Welcome to the Coding Skill Scorer 3000!  **
**  ----------------------------------------- **
**  Please write 'done' after you've entered  **
**         all your coding languages!         **
{stars}
"""

# Main
language_scores = {"python" : 1, "ruby" : 2, "bash" : 4, "git" : 8, "html" : 16, "tdd" : 32, "css" : 64, "javascript" : 128}

print(welcome_message)

user_skills = user_input()
score = calculate_score(user_skills, language_scores)

print(f"""
{stars}
**         Your coding score is: {score}!         **
{stars}    
      
Here are other languages you can learn, and how much they'll increase your coding score!
""")

more_skills(user_skills, language_scores)
