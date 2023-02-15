import styled from "styled-components";

export const Container = styled.div`
    max-width: 864px;
    width: 100%;
    margin: 10rem  auto 0;

    form{
        .form-group{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title{
                font-weight: 700;
                font-size: 18px;
                color: ${(props) => props.theme["base-subtitle"]}
            }
            .subtitle{
                font-weight: 400;
                font-size: 14px;
                color: ${(props) => props.theme["base-span"]}
            }

           
        }
        input{
                margin-top: 10px;
                width: 100%;
                height: 50px;
                border: 1px solid ${(props) => props.theme["base-border"]};
                background: ${(props) => props.theme["base-input"]};
                border-radius: 6px;
                padding: 5px 15px;
                color: ${(props) => props.theme["base-label"]};
                font-weight: 400;
                font-size: 16px;
         }
    }
`;