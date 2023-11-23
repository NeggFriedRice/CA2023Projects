import calculator, pytest

def test_add():
    assert calculator.add(5, 3) == 8
    assert calculator.add(7, 12) == 19
    assert calculator.add(-1, -3) == -4

def test_divide_by_zero():
    with pytest.raises(Exception):
        calculator.divide_by_zero(10, 0)