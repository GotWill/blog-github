import styled from "styled-components";

export const Container = styled.div`
header img{
    width: 100%;
}

`

export const ResumeCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .card{
        width: 864px;
        height: 212px;
        background: ${(props) => props.theme["base-profile"]};
        border-radius: 10px;
        box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
        position: absolute;
        padding: 40px;

        .info{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            img{
                width: 148px;
                height: 148px;
                border-radius: 8px;
            }
            .text{
                padding: 0 20px;
                h2{
                    font-family: 'Nunito';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    color: ${(props) => props.theme["base-title"]};
                    margin-bottom: 10px;
                }
                p{
                    font-family: 'Nunito';
                    font-style: normal;
                    font-weight: 400;
                    color: ${(props) => props.theme["base-text"]};
                }
                .icons{
                  display: flex;
                  gap: 10px;
                  margin-top: 20px;

                  div{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                  }

                  span{
                    color:  ${(props) => props.theme["base-subtitle"]}
                  }
                }
            }

            .link{
                display: flex;
                align-items: center;
                gap: 4px;
                color: ${(props) => props.theme["blue"]};
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                    
                }
            }

            
        }
    }
`;