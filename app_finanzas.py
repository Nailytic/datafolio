
import pandas as pd
from dash import Dash, dcc, html, Input, Output
import plotly.express as px

df = pd.read_csv("dataset_financiero.csv")

app = Dash(__name__)
server = app.server

app.layout = html.Div([
    html.H2("Simulador Financiero"),
    dcc.Slider(0.5, 1.5, 0.1, value=1.0, id="marketing-slider"),
    dcc.Graph(id="grafico"),
])

@app.callback(
    Output("grafico", "figure"),
    Input("marketing-slider", "value")
)
def update(marketing_multiplier):
    df['ajuste_mkt'] = df['marketing_index'] * marketing_multiplier
    fig = px.line(df, x="ds", y="y", title="Proyección de Ingresos")
    return fig

if __name__ == "__main__":
    app.run_server(debug=True)
