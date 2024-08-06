import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    rows= employees.iloc[:3]
    return rows