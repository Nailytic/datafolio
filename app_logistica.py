
import pandas as pd
from dash import Dash, dcc, html, Input, Output
import plotly.express as px

df = pd.read_csv("dataset_logistica.csv")

app = Dash(__name__)
server = app.server

app.layout = html.Div([
    html.H2("Predicción de Demanda"),
    dcc.Dropdown(df['product'].unique(), df['product'].unique()[0], id='producto'),
    dcc.Graph(id='grafico_demanda')
])

@app.callback(
    Output("grafico_demanda", "figure"),
    Input("producto", "value")
)
def update(producto):
    dff = df[df["product"] == producto]
    fig = px.line(dff, x="period", y="demand", title=f"Demanda del Producto {producto}")
    return fig

if __name__ == "__main__":
    app.run_server(debug=True)
