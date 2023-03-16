import styled from "styled-components";

export const Container = styled.div`
    max-width: 864px;
    width: 100%;
    margin: 2rem auto 2rem;

    .container-posts{
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    }

    .post{
        width: 416px;
        height: 260px;
        border-radius: 10px;
        background: ${(props) => props.theme["base-post"]};
        padding: 32px;

        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2 a{
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                color: ${(props) => props.theme["base-title"]};
                text-decoration: none;
            }

            span{
                font-weight: 400;
                font-size: 14px;
                color: ${(props) => props.theme["base-span"]}
            }
        }

        .content{
            margin-top: 20px;

            p{
                font-weight: 400;
                font-size: 16px;
                color: ${(props) => props.theme["base-text"]};
                overflow: hidden; 
                text-overflow: ellipsis; 
                display: -webkit-box;
                -webkit-line-clamp: 4; 
                -webkit-box-orient: vertical; 
            }
        }
    }
`;