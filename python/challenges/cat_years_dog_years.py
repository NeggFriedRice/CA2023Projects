def human_years_cat_years_dog_years(human_years):
    cat = 15
    dog = 15
    if human_years == 2:
        cat += 9
        dog += 9
    elif human_years > 2:
        cat += ((human_years - 2) * 4) + 9
        dog += ((human_years - 2) * 5) + 9

    return [human_years,cat,dog]